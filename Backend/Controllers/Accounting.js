const EstimateAdd = require('../DB/Accounting/Estimate/EstimateAdd.js');
const InvoiceAdd = require('../DB/Accounting/Invoice/InvoiceAdd.js');
const IncomeAdd = require('../DB/Accounting/Income/Income.js');
const ExpensesAdd = require('../DB/Accounting/Expenses/Expenses.js')
const RecurringExpensesAdd = require('../DB/Accounting/RecurringExpenses/RecurringExpenses.js');
const PaymentsAdd = require('../DB/Accounting/Payments/Payments.js');
////////////////////////////////////////////////estimatSection////////////////////////////////////////////////////
///////////////////////////////////////////////estimateRecieved//////////////////////////////////////////////////
const estimateRecieved = async (req, resp) => {


  try {
    let estimateRecieved = await EstimateAdd.find();
    if (estimateRecieved.length > 0) {
      resp.send(estimateRecieved);
    }
    else {
      resp.send("NO data in the estimate table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////addEstimate////////////////////////////////////////////////////
const estimateAdd = async (req, resp) => {
  const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes,status,sender,totalValue } = req.body;
  try {
    let estimateAdd = await new EstimateAdd({
      estimateNumber,
      contact,
      estimateDate,
      dueDate,
      currency,
      term,
      tags,
      estimateType,
      discountType,
      taxes,
      status,
      sender,
      totalValue

    })
    let result = await estimateAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
/////////////////////////////////invoiceSection/////////////////////////////////////////////////////////////
////////////////////////////////invoiceRecieved/////////////////////////////////////////////////////////////////
const invoiceRecieved = async (req, resp) => {


  try {
    let invoiceRecieved = await InvoiceAdd.find();
    if (invoiceRecieved.length > 0) {
      resp.send(invoiceRecieved);
    }
    else {
      resp.send("NO data in the invoice table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////invoiceAdd////////////////////////////////////////////////////
const invoiceAdd = async (req, resp) => {
  const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
  try {
    let invoiceAdd = await new InvoiceAdd({
      estimateNumber,
      contact,
      estimateDate,
      dueDate,
      currency,
      term,
      tags,
      estimateType,
      discountType,
      taxes

    })
    let result = await invoiceAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
///////////////////////////incomeSection//////////////////////////
///////////////////////////incomeAdd////////////////////////////
const incomeRecieved = async (req, resp) => {


  try {
    let incomeRecieved = await IncomeAdd.find();
    if (incomeRecieved.length > 0) {
      resp.send(incomeRecieved);
    }
    else {
      resp.send("NO data in the income table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////addIncome////////////////////////////////////////////////////
const incomeAdd = async (req, resp) => {
  const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
  try {
    let incomeAdd = await new IncomeAdd({
      estimateNumber,
      contact,
      estimateDate,
      dueDate,
      currency,
      term,
      tags,
      estimateType,
      discountType,
      taxes

    })
    let result = await incomeAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
///////////////////////////expensesSection//////////////////////////
///////////////////////////expensesRecieved////////////////////////////
const expensesRecieved = async (req, resp) => {


  try {
    let expensesRecieved = await ExpensesAdd.find();
    if (expensesRecieved.length > 0) {
      resp.send(expensesRecieved);
    }
    else {
      resp.send("NO data in the expenses table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////addexpenses////////////////////////////////////////////////////
const expensesAdd = async (req, resp) => {
  const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
  try {
    let expensesAdd = await new ExpensesAdd({
      estimateNumber,
      contact,
      estimateDate,
      dueDate,
      currency,
      term,
      tags,
      estimateType,
      discountType,
      taxes

    })
    let result = await expensesAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
///////////////////////////recurringExpensesSection//////////////////////////
///////////////////////////recurringExpensesRecieved////////////////////////////
const recurringExpensesRecieved = async (req, resp) => {


  try {
    let recurringExpensesRecieved = await RecurringExpensesAdd.find();
    if (recurringExpensesRecieved.length > 0) {
      resp.send(recurringExpensesRecieved);
    }
    else {
      resp.send("NO data in the recurringExpenses table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////addrecurringExpenses////////////////////////////////////////////////////
const recurringExpensesAdd = async (req, resp) => {
  const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
  try {
    let recurringExpensesAdd = await new RecurringExpensesAdd({
      estimateNumber,
      contact,
      estimateDate,
      dueDate,
      currency,
      term,
      tags,
      estimateType,
      discountType,
      taxes

    })
    let result = await recurringExpensesAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
///////////////////////////paymentsSection//////////////////////////
///////////////////////////paymentsRecieved////////////////////////////
const paymentsRecieved = async (req, resp) => {


  try {
    let paymentsRecieved = await PaymentsAdd.find();
    if (paymentsRecieved.length > 0) {
      resp.send(paymentsRecieved);
    }
    else {
      resp.send("NO data in the payments table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////addpayments////////////////////////////////////////////////////
const paymentsAdd = async (req, resp) => {
  const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
  try {
    let paymentsAdd = await new PaymentsAdd({
      estimateNumber,
      contact,
      estimateDate,
      dueDate,
      currency,
      term,
      tags,
      estimateType,
      discountType,
      taxes

    })
    let result = await paymentsAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}

module.exports = { estimateRecieved, estimateAdd, invoiceRecieved, invoiceAdd, incomeRecieved, incomeAdd, expensesRecieved, expensesAdd, recurringExpensesRecieved, recurringExpensesAdd, paymentsAdd, paymentsRecieved };