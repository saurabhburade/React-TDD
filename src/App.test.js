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

// test("should render inrement button", () => {
//   const wrapper = shallow(<App />);
//   const btnComponent = wrapper.find("button");
//   expect(btnComponent.length).toBe(1);
// });

test("should render inrement button", () => {
  const wrapper = shallow(<App />);
  const btnComponent = wrapper.find("[data-test='increment-button']");
  expect(btnComponent.length).toBe(1);
});
test("should render counter diaplay", () => {
  const wrapper = shallow(<App />);
  const ctrDisplay = wrapper.find("[data-test='counter-diaplay']");
  expect(ctrDisplay.length).toBe(1);
});

test("counter start at 0", () => {
  const wrapper = shallow(<App />);
  const counter = wrapper.find("[data-test='counter']").text();
  expect(counter).toBe("0");
});

test("simulate click increments counter", () => {
  const wrapper = shallow(<App />);
  const btnComponent = wrapper.find("[data-test='increment-button']");

  // click button
  btnComponent.simulate("click");

  // Check for incremented counter
  const counter = wrapper.find("[data-test='counter']").text();
  expect(counter).toBe("1");

});
