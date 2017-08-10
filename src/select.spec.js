import React from "react";
import { mount, render } from "enzyme";
import renderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";

import Select from "./index";

describe("<Select />", () => {
  let data;
  let component;
  let onSelect;
  beforeEach(() => {
    data = [
      { id: "001", name: "Drogon" },
      { id: "002", name: "Rhaegal" },
      { id: "003", name: "Viserion" }
    ];
    onSelect = jest.fn();
    component = (
      <Select
        onSelect={onSelect}
        options={data}
        valueProp={"id"}
        displayProp={["name"]}
      />
    );
  });
  it("should render correctly", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render option tags", () => {
    const wrapper = mount(component);
    expect(wrapper.find("select").children().length).toBe(data.length);
  });

  it("handles change event", () => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return this.props.children;
      }
    }
    const instance = ReactTestUtils.renderIntoDocument(
      <Wrapper>
        {component}
      </Wrapper>
    );

    const select = ReactTestUtils.findRenderedDOMComponentWithTag(
      instance,
      "select"
    );

    ReactTestUtils.Simulate.change(select);
    expect(onSelect).toHaveBeenCalled();
  });
});
