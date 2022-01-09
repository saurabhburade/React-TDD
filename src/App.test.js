// import { render, screen } from '@testing-library/react';
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders non-empty component without crashing", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug()); // logs intenal code
  // ASSERTIONS
  expect(wrapper.exists()).toBe(true);
});

test("should render inrement button", () => {
  const wrapper = shallow(<App />);
  const btnComponent = wrapper.find("button");
  expect(btnComponent.length).toBe(1);
});
