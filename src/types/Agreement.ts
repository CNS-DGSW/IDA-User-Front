export type AgreementKeys = "privacy" | "termUse" | "policy"

export type AgreementInfo = {
  [key in AgreementKeys]: string
}
