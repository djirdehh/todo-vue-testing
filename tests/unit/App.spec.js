import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it("should render correct initial content", () => {
    expect(wrapper.find(".title").text()).toBe("todos");
    expect(
      wrapper.find(".new-todo").element.placeholder
    ).toBe("What needs to be done?");
  });

  it("should set correct default data", () => {
    expect(wrapper.vm.todos).toEqual([]);
    expect(wrapper.vm.newTodo).toEqual("");
  });

  describe("the user populates the text input field", () => {
    let inputField;

    beforeEach(() => {
      inputField = wrapper.find(".new-todo");
      inputField.element.value = "New Todo";
      inputField.trigger("input");
    });

    it("should update the 'newTodo' data property", () => {
      expect(wrapper.vm.newTodo).toEqual("New Todo");
    });

    describe("the user populates the text input field and presses Enter", () => {
      it("should add a new todo to the 'todos' array", () => {
        inputField.trigger("keyup.enter");
        expect(wrapper.vm.todos).toEqual(["New Todo"]);
      });
    });

    describe("and presses Enter and then removes the todo item", () => {
      it("should have the new todo removed from the 'todos' array", () => {
        // Trigger keyup.enter on inputField to submit todo
        // Then find the Remove icon and trigger a click
      });
    });
  });

  describe("the user clicks the 'Remove all' label", () => {
    it("should remove all todos from the 'todos' data property", () => {
      // Quickly update the todos array with wrapper.setData({})
      // Find the Remove all button and trigger a click
    });
  });
});

// Exercise Solution! https://gist.github.com/djirdehh/3faf8640ad49c1952aa8a65ffefe9171
