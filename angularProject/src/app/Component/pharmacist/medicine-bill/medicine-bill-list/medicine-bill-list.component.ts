import {Component, OnInit} from '@angular/core';
import {MedicineBillService} from '../medicine-bill.service';
import {Router} from '@angular/router';
import {ApiResponse} from "../../../../util/api.response.model";
import { MedicineBill } from '../medicine-bill.model';

@Component({
  selector: 'app-medicine-bill-list',
  templateUrl: './medicine-bill-list.component.html',
  styleUrls: ['./medicine-bill-list.component.css']
})
export class MedicineBillListComponent implements OnInit {

  bills: MedicineBill[] = [];

  apiError: string | undefined = ''; // To handle errors from the API

  constructor(private billService: MedicineBillService, private router: Router) {
  }

  ngOnInit() {
    this.loadBills(); // Load the bills when the component initializes
  }

  // Load all the bills using the service
  loadBills() {
    this.billService.getAllBills().subscribe({
      next: (response: ApiResponse) => {
        if (response.data) {
          this.bills = response.data['bills'];
        } else {
          this.apiError = 'Failed to load bills';
          console.error('Error fetching bills:', response.message);
        }
      },
      error: (err) => {
        this.apiError = 'Error connecting to the server';
        console.error('Error fetching bills:', err);
      }
    });
  }

  // Function to print the bill details
  // printBill(bill: any) {
  //   const printContent = `
  //     <h2>Medicine Bill</h2>
  //     <p><strong>Bill ID:</strong> ${bill.id}</p>
  //     <p><strong>Patient Name:</strong> ${bill.name}</p>
  //     <p><strong>Phone:</strong> ${bill.phone}</p>
  //     <p><strong>Email:</strong> ${bill.email}</p>
  //     <p><strong>Invoice Date:</strong> ${new Date(bill.invoiceDate).toLocaleDateString()}</p>
  //     <p><strong>Total Amount:</strong> ${bill.totalAmount}</p>
  //     <p><strong>Amount Paid:</strong> ${bill.amountPaid}</p>
  //     <p><strong>Balance:</strong> ${bill.balance}</p>
  //     <p><strong>Status:</strong> ${bill.status}</p>
  //     <p><strong>Description:</strong> ${bill.description}</p>
  //   `;
  //   const newWindow = window.open('', '_blank', 'width=600,height=800');
  //   if (newWindow) {
  //     newWindow.document.write(`
  //       <html>
  //       <head><title>Print Bill</title></head>
  //       <body>${printContent}</body>
  //       </html>
  //     `);
  //     newWindow.document.close();
  //     newWindow.print();
  //   }
  // }


  printBill(bill: any) {
    const printContent = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <style>
        body {
          margin: 20px;
          padding: 20px;
          background-color: #f9f9f9;
        }
  
        .invoice {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
  
        h2 {
          text-align: center;
          color: #007bff;
          margin-bottom: 30px;
        }
  
        .invoice-header, .invoice-footer {
          text-align: center;
        }
  
        .invoice-details {
          margin-bottom: 30px;
        }
  
        .invoice-details p {
          margin: 5px 0;
          font-size: 16px;
          color: #333;
        }
  
        .total {
          font-size: 18px;
          font-weight: bold;
          color: #007bff;
        }
  
        .footer {
          font-size: 12px;
          color: #888;
          margin-top: 20px;
        }
      </style>
  
      <div class="container">
        <div class="invoice">
          <div class="invoice-header">
            <h2>Payment Invoice</h2>
            <p><strong>Invoice ID:</strong> ${bill.id}</p>
            <p><strong>Invoice Date:</strong> ${new Date(bill.invoiceDate).toLocaleDateString()}</p>
          </div>
  
          <div class="invoice-details">
            <h5>Patient Information</h5>
            <p><strong>Name:</strong> ${bill.name}</p>
            <p><strong>Phone:</strong> ${bill.phone}</p>
            <p><strong>Email:</strong> ${bill.email}</p>
          </div>
  
          <div class="invoice-details">
            <h5>Payment Summary</h5>
            <p><strong>Total Amount:</strong> ${bill.totalAmount}</p>
            <p><strong>Amount Paid:</strong> ${bill.amountPaid}</p>
            <p><strong>Balance:</strong> ${bill.balance}</p>
            <p><strong>Status:</strong> ${bill.status}</p>
          </div>
  
          <div class="invoice-footer">
            <p class="total">Thank you for choosing our services!</p>
          </div>
        </div>
      </div>
    `;
  
    const newWindow = window.open('', '_blank', 'width=600,height=600');
    if (newWindow) {
      newWindow.document.write(`
        <html>
        <head>
          <title>Print Invoice</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>${printContent}</body>
        </html>
      `);
      newWindow.document.close();
      newWindow.print();
    }
  }
  
  
  
}
