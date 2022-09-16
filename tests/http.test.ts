import request from "supertest";
import { Server } from "http";
import run from "../app";

describe("http", () => {
	let server: Server;
	beforeAll(() => {
		server = run(3003);
	});

	it("GET /api", () => {
		return request(server)
			.get("/api")
			.expect(200)
			.then((response) => {
				expect(response.body).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			});
	});

	afterAll(() => {
		server.close();
	});
});
