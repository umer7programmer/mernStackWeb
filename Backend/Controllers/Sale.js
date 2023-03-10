const salesEstimateAdd=require('../DB/Sale/Estimate/EstimateAdd.js');

const salesInvoiceAdd=require('../DB/Sale/Invoice/InvoiceAdd.js');
const salesProposalAdd=require('../DB/Sale/Proposal/Proposal.js');
const salesPipelineAdd=require('../DB/Sale/Pipeline/Pipelineadd.js');
const salesPaymentAdd=require('../DB/Sale/Payment/Payment.js');
////////////////////////////////////////////////salesEstimatSection////////////////////////////////////////////////////
///////////////////////////////////////////////salesEstimateRecieved//////////////////////////////////////////////////
const SalesEstimateRecieved = async (req, resp) => {


    try {
      let estimateRecieved = await salesEstimateAdd.find();
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
  const SalesEstimateAdd = async (req, resp) => {
    const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes,status,sender,totalValue } = req.body;
    try {
      let estimateAdd = await new salesEstimateAdd({
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
  catch(error){
    resp.send(error)
  }
}
///////////////////////////paymentsSection//////////////////////////
///////////////////////////paymentsRecieved////////////////////////////
const SalesPaymentRecieved = async (req, resp) => {


    try {
      let paymentsRecieved = await salesPaymentAdd.find();
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
  const SalesPaymentAdd = async (req, resp) => {
    const { estimateNumber,  estimateDate, dueDate,  tags,senderName,totalValue } = req.body;
    try {
      let paymentsAdd = await new salesPaymentAdd({
        estimateNumber,
      
        estimateDate,
        dueDate,
     
        tags,
        senderName,
        totalValue
  
      })
      let result = await paymentsAdd.save();
      resp.send(result);
    }
    catch (error) {
      resp.send(error);
    }
  }
  /////////////////////////////////invoiceSection/////////////////////////////////////////////////////////////
////////////////////////////////invoiceRecieved/////////////////////////////////////////////////////////////////
const SalesInvoiceRecieved = async (req, resp) => {


    try {
      let invoiceRecieved = await salesInvoiceAdd.find();
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
  const SalesInvoiceAdd = async (req, resp) => {
    const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
    try {
      let invoiceAdd = await new salesInvoiceAdd({
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
  ////////////////////////////////////////////////PipelineSection////////////////////////////////////////////////////
///////////////////////////////////////////////PipelineRecieved//////////////////////////////////////////////////
const SalesPipelineRecieved = async (req, resp) => {


    try {
      let pipelineRecieved = await salesPipelineAdd.find();
      if (pipelineRecieved.length > 0) {
        resp.send(pipelineRecieved);
      }
      else {
        resp.send("NO data in the pipeline table");
  
      }
    }
    catch (error) {
      resp.send(error);
    }
  
  
  }
  ///////////////////////////////////////////addPipeline////////////////////////////////////////////////////
  const SalesPipelineAdd = async (req, resp) => {
    const {  author,template, contact, jobPostUrl, proposalDate, estimateNumber,estimateDate,dueDate,totalValue,sender,tags,status } = req.body;
    try {
      let pipelineAdd = await new salesPipelineAdd({
        author,
      template,
       contact,
        jobPostUrl, 
        proposalDate, 
        estimateNumber,
        estimateDate,
        dueDate,
        totalValue,
        sender,
        tags,
        status
  
      })
      let result = await pipelineAdd.save();
      resp.send(result);
    }
  catch(error){
    resp.send(error)
  }
}
 ///////////////////////////////////////////////proposalTemplateRecieved//////////////////////////////////////////////////
 const SalesProposalRecieved = async (req, resp) => {


    try {
      let salesProposalRecieved = await salesProposalAdd.find();
      if (salesProposalRecieved.length > 0) {
        resp.send(salesProposalRecieved);
      }
      else {
        resp.send("NO data in the salesProposal table");
  
      }
    }
    catch (error) {
      resp.send(error);
    }
  
  
  }
  ///////////////////////////////////////////salesPropsalAdd////////////////////////////////////////////////////
  const SalesProposalAdd = async (req, resp) => {
    const {  author,template, contact, jobPostUrl, proposalDate, estimateNumber,estimateDate,dueDate,totalValue,sender,tags,status} = req.body;
    try {
      let propsalAdd = await new salesProposalAdd({
        author,
        template,
         contact,
          jobPostUrl, 
          proposalDate, 
          estimateNumber,
          estimateDate,
          dueDate,
          totalValue,
          sender,
          tags,
          status
      })
      let result = await propsalAdd.save();
      resp.send(result);
    }
    catch (error) {
      resp.send(error);
    }
  }
  module.exports={SalesEstimateRecieved,SalesEstimateAdd,SalesInvoiceAdd,SalesInvoiceRecieved,SalesPaymentAdd,SalesPaymentRecieved,SalesPipelineAdd,SalesPipelineRecieved,SalesProposalAdd,SalesProposalRecieved}