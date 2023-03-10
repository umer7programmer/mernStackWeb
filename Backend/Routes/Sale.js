const express=require('express');
const { SalesEstimateRecieved, SalesEstimateAdd, SalesPipelineRecieved, SalesPipelineAdd, SalesInvoiceRecieved, SalesInvoiceAdd, SalesPaymentAdd, SalesPaymentRecieved, SalesProposalAdd ,SalesProposalRecieved} = require('../Controllers/Sale');

const router=express.Router();
router.route('/EstimateRecieved').get(SalesEstimateRecieved);
router.route('/EstimateAdd').post(SalesEstimateAdd);
router.route('/PipelineRecieved').get(SalesPipelineRecieved);
router.route('/PipelineAdd').post(SalesPipelineAdd);
router.route('/InvoiceRecieved').get(SalesInvoiceRecieved);
router.route('/InvoiceAdd').post(SalesInvoiceAdd);
router.route('/PaymentRecieved').get(SalesPaymentRecieved);
router.route('/PaymentAdd').post(SalesPaymentAdd);
router.route('/ProposalRecieved').get(SalesProposalRecieved);
router.route('/ProposalAdd').post(SalesProposalAdd);


module.exports=router;