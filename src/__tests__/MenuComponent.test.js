import { render, screen } from "@testing-library/react";
import MenuComponent from "../components/body/MenuComponent";
import MenuItem from "../components/body/MenuItem";

// const mocData = {
//     id: 0,
//     name: 'Ginger Burger',
//     image: 'assets/images/0burger.jpg',
//     category: 'meal',
//     label: 'Hot',
//     price: '199',
//     description: 'This chicken burger gets an Asian-flavor twist with ginger and garlic. It\'s topped off with a fabulous coleslaw. If you like, serve the coleslaw as a side for grilled items, like chicken breasts, fish fillets or chops',
// }

test("MenuComponent Test", () => {
    render(<MenuComponent />);
    const element = screen.getByText(/French Fries/i);
    expect(element).toBeInTheDocument();
});

// test('Menu Item Test', () => {
//     render(<MenuItem dish={mocData} />);
//     const element = screen.getByText(/Ginger burger/i);
//     expect(element).toBeInTheDocument();
// });