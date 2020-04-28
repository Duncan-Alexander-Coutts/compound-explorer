import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import AssayResults from "./AssayResults";
import {
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

/**
 * An example of the kind of test I would write for rendering a React component
 * I have learned to keep these tests at a level which tests what is important
 * but no so extensive that they are brittle to changes in the underlying code
 */
describe("AssayResults.test", () => {
  let shallow;
  let component;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe("regardless of the given results", () => {
    beforeAll(() => {
      component = shallow(<AssayResults />);
    });

    it('the root header should be rendered as "Assay results"', () => {
      expect(component.find(Typography).text()).toEqual("Assay results");
    });

    it('first table header should be rendered as "Target"', () => {
      expect(component.find(TableHead).find(TableCell).first().text()).toEqual(
        "Target"
      );
    });

    it('the first table header should be rendered as "Result"', () => {
      expect(component.find(TableHead).find(TableCell).at(1).text()).toEqual(
        "Result"
      );
    });
  });

  describe("when no results have been given", () => {
    beforeAll(() => {
      component = shallow(<AssayResults />);
    });

    it("no table rows should be rendered in the table body", () => {
      expect(component.find(TableBody).find(TableRow)).toHaveLength(0);
    });
  });

  describe("when a number of results have been given", () => {
    beforeAll(() => {
      const mockResults = [
        {
          result_id: 123,
          target: "mock_target_1",
          result: "mock_result_1",
          operator: "mock_operator_1",
          value: "mock_value_1",
          unit: "mock_unit_1",
        },
        {
          result_id: 213,
          target: "mock_target_2",
          result: "mock_result_2",
          operator: "mock_operator_2",
          value: "mock_value_2",
          unit: "mock_unit_2",
        },
      ];
      component = shallow(<AssayResults results={mockResults} />);
    });

    it("the correct number of table rows should be rendered in the table body", () => {
      expect(component.find(TableBody).find(TableRow)).toHaveLength(2);
    });

    describe("the first rendered result", () => {
      it("should have the expected target text", () => {
        expect(
          component
            .find(TableBody)
            .find('[data-test="result-target"]')
            .at(0)
            .text()
        ).toBe("mock_target_1");
      });

      it("should have the expected result text", () => {
        expect(
          component
            .find(TableBody)
            .find('[data-test="result-text"]')
            .at(0)
            .text()
        ).toBe("mock_result_1 mock_operator_1 mock_value_1mock_unit_1");
      });
    });

    describe("the second rendered result", () => {
      it("should have the expected target text", () => {
        expect(
          component
            .find(TableBody)
            .find('[data-test="result-target"]')
            .at(1)
            .text()
        ).toBe("mock_target_2");
      });

      it("should have the expected result text", () => {
        expect(
          component
            .find(TableBody)
            .find('[data-test="result-text"]')
            .at(1)
            .text()
        ).toBe("mock_result_2 mock_operator_2 mock_value_2mock_unit_2");
      });
    });
  });
});
