import { isUserAction } from "../actions/connectionAction"

import userReducer from "./userReducer"

describe("userReducer", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(userReducer(prevState, anyAction)).toEqual(prevState)
  })

  it("should handle test user", () => {
    const prevState = []

    const response = {
      success: true,
      data: {
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
      }
    }

    const expectedState = [
      {
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
      }
    ]

    const testUser = isUserAction(response)

    expect(userReducer(prevState, testUser)).toEqual(expectedState)
  })
})
