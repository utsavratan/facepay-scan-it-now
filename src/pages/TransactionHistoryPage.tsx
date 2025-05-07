
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const TransactionHistoryPage = () => {
  // Sample transaction data
  const transactions = [
    { id: 1, name: "Mobile Recharge", amount: -349, date: "2023-05-06", type: "outgoing" },
    { id: 2, name: "Received from Rahul", amount: 1200, date: "2023-05-05", type: "incoming" },
    { id: 3, name: "Electricity Bill", amount: -1450, date: "2023-05-03", type: "outgoing" },
    { id: 4, name: "Grocery Store", amount: -850, date: "2023-05-02", type: "outgoing" },
    { id: 5, name: "FacePay to Coffee Shop", amount: -120, date: "2023-05-08", type: "outgoing" },
    { id: 6, name: "Salary Credit", amount: 25000, date: "2023-05-01", type: "incoming" },
    { id: 7, name: "Movie Tickets", amount: -500, date: "2023-04-29", type: "outgoing" },
    { id: 8, name: "Rent Payment", amount: -12000, date: "2023-04-28", type: "outgoing" },
    { id: 9, name: "Cashback Reward", amount: 150, date: "2023-04-26", type: "incoming" },
    { id: 10, name: "Restaurant Bill", amount: -1250, date: "2023-04-25", type: "outgoing" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
        
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">
                      {new Date(transaction.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{transaction.name}</TableCell>
                    <TableCell>
                      {transaction.type === "incoming" ? (
                        <span className="flex items-center text-green-600">
                          <ArrowDownLeft size={16} className="mr-1" />
                          Credit
                        </span>
                      ) : (
                        <span className="flex items-center text-red-600">
                          <ArrowUpRight size={16} className="mr-1" />
                          Debit
                        </span>
                      )}
                    </TableCell>
                    <TableCell className={`text-right ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
                      {transaction.amount > 0 ? '+' : ''}
                      ₹{Math.abs(transaction.amount).toLocaleString('en-IN')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default TransactionHistoryPage;
