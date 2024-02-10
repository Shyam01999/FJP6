import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/layout.css';
import './styles/module.css';
import './styles/theme.css';
import './styles/states.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from './components/NotFound';
import Homepage from './pages/Homepage';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="*" element={<NotFound />} />

          {/* <Route path="/" element={<SideBar><ProtectRoute /></SideBar>}>

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="adminPanel/user" element={<UserTabs />} />
            <Route path="adminPanel/employeeMaster" element={<EmployeeMaster />}/>
            <Route path="adminPanel/siteManagement" element={<SiteManagement />}/>
            <Route path="adminPanel/acessControl" element={<Accessibility />}/>

            <Route path="employeeManagement/employee" element={<Employee />} />
            <Route path="employeeManagement/attendance" element={<TabView />} />
            <Route path="employeeManagement/advance" element={<Advance />} />
            <Route path="employeeManagement/employeeTransfer" element={<EmployeeTransfer />}/>
            <Route path="employeeManagement/salaryPayment" element={<SalaryPayment />}/>

            <Route path="items/item" element={<Item />} />
            <Route path="items/additem" element={<AddItem />} />
            <Route path="items/edititem/:id" element={<EditItem />} />
            <Route path="items/itemMaster" element={<ItemMaster />} />
            <Route path="items/additem-master" element={<AddItemMaster />} />
            <Route path="items/edititem-master/:id" element={<EditItemMaster />}/>
            <Route path="items/manageStock" element={<ManageStockTabs />} />
            <Route path="items/manageStock/:tab?" element={<ManageStockTabs />}/>
            <Route path="items/manageStock/receiveGoods" element={<ReceiveGoodsForm />}/>
            <Route path="items/manageStock/issueGoods" element={<IssueGoodsForm />}/>
            <Route path="items/manageStock/produceProduct/addProduct" element={<AddProduceProduct />}/>
            <Route path="items/manageStock/produceProduct/addMultiProduct" element={<AddMultiProduct />}/>
            <Route path="items/manageStock/produceProduct/editProduct" element={<EditProduceProduct />}/>
            <Route path="items/manageStock/produceProduct/editMultiProduct" element={<EditMultiProduct />}/>
            <Route path="items/manageStock/saleProduct/addSale" element={<AddSale />}/>
            <Route path="items/manageStock/saleProduct/editSale/:id" element={<EditSale />}/>
            <Route path="items/stockreport" element={<StockReports />} />
            <Route path="items/stockreport/stockReportsMonthlySummary/:id" element={<MonthlySummaryView />}/>
            <Route path="items/stockreport/stockReportsMonthlySummary/stockVoucher/:itemid" element={<StockVoucherView />}/>

            <Route path="equipment/vehicles" element={<Vehicles />} />
            <Route path="equipment/addVehicles" element={<AddVehicle />} />
            <Route path="equipment/editVehicles/:id" element={<EditVehicle />}/>
            <Route path="equipment/operationalTracking" element={<OperationalTracking />}/>
            <Route path="equipment/maintenance" element={<Maintenance />} />
            <Route path="equipment/maintenance/addBill" element={<AddBill />} />
            <Route path="equipment/maintenance/viewBill" element={<ViewBill />} />
            <Route path="equipment/maintenance/viewPayment" element={<ViewPayment />} />
            <Route path="equipment/maintenance/addPayment" element={<AddPayment />} />
            <Route path="equipment/equipmentTransfer" element={<EquipmentTransfer />}/>

            <Route path="purchase/vendor" element={<Vendor />} />
            <Route path="purchase/purchaseBills" element={<PurchaseBills />} />
            <Route path="purchase/purchaseBills/addPurchaseBills" element={<AddPurchaseBills />} />
            <Route path="purchase/purchaseBills/editPurchaseBills/:id" element={<EditPurchaseBills />}/>
            <Route path="purchase/purchaseBills/viewPurchaseBills/:itemId" element={<ViewPurchaseBills />}/>
            <Route path="purchase/paymentsMade" element={<PaymentsMade />} />
            <Route path="purchase/paymentsMade/addPaymentMade" element={<AddPaymentMade />} />
            <Route path="purchase/paymentsMade/addPaymentMade/vAView" element={<VAView />}/>
            <Route path="purchase/paymentsMade/vAView" element={<VAView />} />
            <Route path="purchase/paymentsMade/addPaymentMade/bPView" element={<BPView />}/>

            <Route path="sales/customer" element={<Customer />} />
            <Route path="sales/invoice" element={<Invoice />} />
            <Route path="sales/addInvoice" element={<AddInvoice />} />
            <Route path="sales/editInvoice/:id" element={<EditInvoice />} />
            <Route path="sales/viewInvoice/:id" element={<ViewInvoice />} />
            <Route path="sales/paymentReceive" element={<PaymentReceive />} />
            <Route path="sales/addPaymentReceive" element={<AddPaymentReceive />} />
            <Route path="sales/editPaymentReceive/:id" element={<EditPaymentReceive />} />
            <Route path="sales/viewPaymentReceive/:id" element={<ViewPaymentReceive />} />

            <Route path="banking/bank" element={<Bank />} />
            <Route path="banking/addbank" element={<AddBank />} />
            <Route path="items/editbank/:id" element={<EditBank />} />
            <Route path="banking/bankStatement" element={<BankStatement />} />
            <Route path="banking/bankStatement/statementView" element={<ViewStatement />} />
            <Route path="banking/transaction" element={<Transaction />} />
            <Route path="banking/cashinhand" element={<CashInHand />} />

            <Route path="accounting/manualJournal" element={<ManualJournal />}/>
            <Route path="accounting/manualJournal/newJournal" element={<NewJournal />}/>
            <Route path="accounting/manualJournal/editJournal/:id" element={<EditJournal />}/>
            <Route path="accounting/chartOfAccount" element={<ChartOfAccount />}/>
            <Route path="accounting/ledger" element={<AccountLedger />} />

            <Route path="reports" element={<Reports />} />
            <Route path="reports/ledgerReport" element={<LedgerReport />} />
            <Route path="reports/ledgerReport/detailedAccountTransactions" element={<ViewTable />}/>
            <Route path="reports/balanceSheet" element={<BalanceSheet />} />
            <Route path="reports/profitAndLoss" element={<ProfitAndLoss />} />
            <Route path="reports/profitAndLoss/accountTransactions" element={<PLAccountTransactions />} />
            <Route path="reports/trialBalance" element={<TrialBalance />} />
            <Route path="reports/trialBalance/accountTransactions" element={<AccountTransactions />} />
            <Route path="reports/trialBalance/accountTransactions/detailedAccountTransactions" element={<DetailedAccountTransactions />}/>
            <Route path="reports/cashBook" element={<CashBook />} />

            <Route path="taxes/tdstcs" element={<TaxTab />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
