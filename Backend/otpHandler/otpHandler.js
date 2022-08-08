require("dotenv").config();
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceId = process.env.TWILIO_SERVICE_ID;
const client = require("twilio")(accountSID, authToken);

module.exports = {
  make: (phoneNumber) => {
    return new Promise(async (resolve, reject) => {
      await client.verify
        .services(serviceId)
        .verifications.create({
          to: `+91${phoneNumber}`,
          channel: "sms",
        })
        .then((verifications) => {
          resolve(verifications);
        });
    });
  },

  verifyOtp: (otp, phoneNumber) => {
    return new Promise(async (resolve, reject) => {
      await client.verify
        .services(serviceId)
        .verificationChecks.create({
          to: `+91${phoneNumber}`,
          code: otp,
        })
        .then((verification_check) => {
          resolve(verification_check);
        });
    });
  },
};
