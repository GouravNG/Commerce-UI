import { http, HttpResponse } from "msw"
import { faker } from "@faker-js/faker"

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    })
  }),
]
