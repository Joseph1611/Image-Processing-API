// eslint-disable-next-line @typescript-eslint/no-unused-vars
import app from "../server/index";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import supertest from "supertest";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { resizeimage } from "../routes/api/opreration";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const request = supertest(app);
fdescribe("end Point Testing", () => {
  it("this is  the end point", async () => {
    const response = await request.get("/api/photos");
    expect(response.status).toBe(200);
  });
});

fdescribe("test the function", () => {
  it("image test", async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    expect(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      await resizeimage();
    }).not.toThrow();
  });
});
