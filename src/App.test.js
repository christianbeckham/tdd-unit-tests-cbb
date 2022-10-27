import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

it("renders the 'logo.svg' image", () => {
	render(<App />);
	const logoElement = screen.getByRole("img");
	expect(logoElement).toHaveAttribute("src", "logo.svg");
});
