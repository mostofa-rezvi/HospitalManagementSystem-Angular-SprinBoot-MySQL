import { Component } from '@angular/core';
import {ApiResponse} from "../../../../util/api.response.model";
import {MedicineBillService} from "../medicine-bill.service";
import {ActivatedRoute} from "@angular/router";
import jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-medicine-bill-pdf',
  templateUrl: './medicine-bill-pdf.component.html',
  styleUrl: './medicine-bill-pdf.component.css'
})
export class MedicineBillPdfComponent {

  bill: any = {}; // Object to store the bill data
  apiError: string | undefined = ''; // To store any potential errors from the API

  constructor(private route: ActivatedRoute, private billService: MedicineBillService) {}

  ngOnInit() {
    const billId = this.route.snapshot.params['id'];
    this.fetchBill(billId); // Fetch bill details on component initialization
  }

  fetchBill(id: number) {
    this.billService.getBillById(id).subscribe({
      next: (response: ApiResponse) => {
        this.bill = response.data; // Assuming response.data contains the bill details
      },
      error: (err) => {
        this.apiError = 'Error fetching bill';
        console.error('Error fetching bill:', err);
      }
    });
  }

  generatePDF() {
    const data = document.getElementById('invoice')!; // Get the invoice element

    html2canvas(data).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'pt', 'a4');
      const imgWidth = 190; // Set the image width
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      position += heightLeft;

      pdf.save(`invoice-${this.bill.id}.pdf`); // Save the PDF
    });
  }
}
