import { Machine } from "xstate"

export const contactFormMachine = Machine({
	id: "contactForm",
  initial: "idle",
  states: {
    idle: {
      on: { SUBMIT: "submitting" }
    },
    submitting: {
      on: { SUCCESS: "succeded", FAIL: "failed" }
		},
		succeded: {
			on: { CLOSE: "idle" }
		},
		failed: {
			on: { RETRY: "idle" }
		}
  }
})