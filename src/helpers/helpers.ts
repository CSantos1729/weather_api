//algokit goal account export -a CAEEYPVTNO7HHYJCHDDF6FHSS6C5HEEZWMPHKNZDQWFQQ6VTICB5STSZAY
// Import Algosdk and configuration functions
import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";

// Function to store weather data
export const storeWeatherData = async (data: WeatherData): Promise<void> => {
  try {
    // Get Algorand client and account
    const client = getClient();
    const account = getAccount();

    // Get suggested transaction parameters
    const suggestedParams = await client.getTransactionParams().do();

    // Encode weather data as a note
    const note = algosdk.encodeObj(data);

    // Create a payment transaction with the weather data note
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to: account.addr, // Sending the transaction to oneself
      amount: 1000, // Minimum amount
      note: note,
      suggestedParams: suggestedParams,
    });

    // Sign the transaction
    const signedTxn = txn.signTxn(account.sk);

    // Send the signed transaction
    const sendTxn = await client.sendRawTransaction(signedTxn).do();

    // Log transaction ID on success
    console.log("Transaction ID:", sendTxn.txId);
  } catch (error) {
    // Log error on failure
    console.error("Failed to store weather data:", error);
  }
};

// Function to store planet data
export const storePlanetData = async (data: PlanetData): Promise<void> => {
  try {
    // Get Algorand client and account
    const client = getClient();
    const account = getAccount();

    // Get suggested transaction parameters
    const suggestedParams = await client.getTransactionParams().do();

    // Encode planet data as a note
    const note = algosdk.encodeObj(data);

    // Create a payment transaction with the planet data note
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to: account.addr, // Sending the transaction to oneself
      amount: 1000, // Minimum amount
      note: note,
      suggestedParams: suggestedParams,
    });

    // Sign the transaction
    const signedTxn = txn.signTxn(account.sk);

    // Send the signed transaction
    const sendTxn = await client.sendRawTransaction(signedTxn).do();

    // Log transaction ID on success
    console.log("Transaction ID:", sendTxn.txId);
  } catch (error) {
    // Log error on failure
    console.error("Failed to store planet data:", error);
  }
};

// Function to store space weather data
export const storeSpaceWeatherData = async (data: SpaceWeatherData): Promise<void> => {
  try {
    // Get Algorand client and account
    const client = getClient();
    const account = getAccount();

    // Get suggested transaction parameters
    const suggestedParams = await client.getTransactionParams().do();

    // Encode space weather data as a note
    const note = algosdk.encodeObj(data);

    // Create a payment transaction with the space weather data note
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to: account.addr, // Sending the transaction to oneself
      amount: 1000, // Minimum amount
      note: note,
      suggestedParams: suggestedParams,
    });

    // Sign the transaction
    const signedTxn = txn.signTxn(account.sk);

    // Send the signed transaction
    const sendTxn = await client.sendRawTransaction(signedTxn).do();

    // Log transaction ID on success
    console.log("Transaction ID:", sendTxn.txId);
  } catch (error) {
    // Log error on failure
    console.error("Failed to store space weather data:", error);
  }
};

// Function to store Mars weather data
export const storeMarsWeatherData = async (data: MarsWeatherData): Promise<void> => {
  try {
    // Get Algorand client and account
    const client = getClient();
    const account = getAccount();

    // Get suggested transaction parameters
    const suggestedParams = await client.getTransactionParams().do();

    // Encode Mars weather data as a note
    const note = algosdk.encodeObj(data);

    // Create a payment transaction with the Mars weather data note
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to: account.addr, // Sending the transaction to oneself
      amount: 1000, // Minimum amount
      note: note,
      suggestedParams: suggestedParams,
    });

    // Sign the transaction
    const signedTxn = txn.signTxn(account.sk);

    // Send the signed transaction
    const sendTxn = await client.sendRawTransaction(signedTxn).do();

    // Log transaction ID on success
    console.log("Transaction ID:", sendTxn.txId);
  } catch (error) {
    // Log error on failure
    console.error("Failed to store Mars weather data:", error
);
  }
};
