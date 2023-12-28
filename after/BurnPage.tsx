import React from "react";
import DashboardLayoutStyled from "./DashboardLayoutStyled";
import TransactionTableStyled from "./TransactionTableStyled";
import ChainSelector from "./ChainSelector";
import AppToast from "./AppToast";

//components
import BurnButtonBar from "./components/BurnButtonBar";
import BurnStatsContainer from "./components/BurnStatsContainer";
import BurnTxTable from "./components/BurnTxTable";
import useBurnPage from "./hooks/useBurnPage";

const BurnPage: React.FC = () => {
  const {} = useBurnPage();

  return (
    <div>
      <DashboardLayoutStyled className="burnpage">
        <div
          className="top_conatiner burnpage"
          style={{ alignItems: "flex-start" }}
        >
          <h1 className="title">App TOKEN BURN</h1>
          <p className="description medium"></p>
          <BurnButtonBar
            burnAmount={burnAmount}
            onChangeBurnAmount={onChangeBurnAmount}
            executeBurn={executeBurn}
            txButton={txButton}
            txProgress={txProgress}
            burnTxHash={burnTxHash}
            walletChain={walletChain}
          />
          <BurnStatsContainer
            statsSupplies={statsSupplies}
            walletChain={walletChain}
            suppliesChain={suppliesChain}
            tokenAddress={tokenAddress}
          />
        </div>
      </DashboardLayoutStyled>
      <TransactionTableStyled>
        <div className="header">
          <p className="header_label">Burn Transactions</p>
        </div>
        <BurnTxTable
          data={burnTransactions}
          priceUSD={coinData?.current_price?.usd}
        />
      </TransactionTableStyled>
      <ChainSelector
        title="Switch Token Chain"
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain}
      />
      <AppToast
        position={{ vertical: "bottom", horizontal: "center" }}
        message={toastMsg}
        severity={toastSev}
      />
    </div>
  );
};

export default BurnPage;
