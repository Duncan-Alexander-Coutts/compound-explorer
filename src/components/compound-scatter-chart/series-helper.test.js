import _ from "lodash";
import {
  findCompoundBySeriesItem,
  formatCompoundsForScatterChart,
} from "./series-helper";

describe("series-helper.test", () => {
  describe("formatCompoundsForScatterChart", () => {
    it("should return an empty array when passed undefined", () => {
      expect(formatCompoundsForScatterChart(undefined)).toEqual([]);
    });

    it("should return an empty array when passed null", () => {
      expect(formatCompoundsForScatterChart(null)).toEqual([]);
    });

    it("should return an empty array when passed an empty array", () => {
      expect(formatCompoundsForScatterChart([])).toEqual([]);
    });

    describe("when passed a fully populated compounds array", () => {
      const mockInput = [
        {
          compound_id: "mock_compound_id_1",
          molecular_weight: "mock_molecular_weight_1",
          ALogP: "mock_ALogP_1",
        },
        {
          compound_id: "mock_compound_id_2",
          molecular_weight: "mock_molecular_weight_2",
          ALogP: "mock_ALogP_2",
        },
      ];
      const mockInputClone = _.cloneDeep(mockInput);
      let result;

      beforeEach(() => {
        result = formatCompoundsForScatterChart(mockInput);
      });

      it('the result should include a single top-level "compounds" group item', () => {
        expect(result.length).toBe(1);
        expect(result[0].id).toBe("compounds");
      });

      it('the result should include a "data" property with 2 compounds', () => {
        expect(result[0].data).toHaveLength(2);
      });

      it("the first compound should include the expected contents of the 1st compound", () => {
        expect(result[0].data[0]).toEqual({
          id: "mock_compound_id_1",
          x: "mock_molecular_weight_1",
          y: "mock_ALogP_1",
          compound_id: "mock_compound_id_1",
        });
      });

      it("the second compound should include the expected contents of the 2nd compound", () => {
        expect(result[0].data[1]).toEqual({
          id: "mock_compound_id_2",
          x: "mock_molecular_weight_2",
          y: "mock_ALogP_2",
          compound_id: "mock_compound_id_2",
        });
      });

      it("should not have mutated the original input by reference in anyway (i.e. pure function)", () => {
        expect(mockInput).toEqual(mockInputClone);
      });
    });
  });

  describe("findCompoundBySeriesItem", () => {
    it("should throw an error if the given seriesItem is undefined", () => {
      expect(() => findCompoundBySeriesItem(undefined)).toThrow(
        "seriesItem must be defined"
      );
    });

    it("should throw an error if the given seriesItem has no data property", () => {
      expect(() => findCompoundBySeriesItem({})).toThrow(
        "seriesItem malformed, requires data property"
      );
    });

    it("should throw an error if given compounds is undefined", () => {
      expect(() => findCompoundBySeriesItem({ data: {} }, undefined)).toThrow(
        "compounds must be a defined array"
      );
    });

    it("should throw an error if given compounds is not an array", () => {
      expect(() => findCompoundBySeriesItem({ data: {} }, {})).toThrow(
        "compounds must be a defined array"
      );
    });

    describe("when the given seriesItem CANNOT be found in the given compounds", () => {
      const mockCompounds = [
        { compound_id: 123 },
        { compound_id: 321 },
        { compound_id: 213 },
      ];
      const mockSeriesItem = {
        data: {
          compound_id: 545,
        },
      };

      it("should return undefined", () => {
        expect(
          findCompoundBySeriesItem(mockSeriesItem, mockCompounds)
        ).toBeUndefined();
      });
    });

    describe("when the given seriesItem CAN be found in the given compounds", () => {
      const mockCompounds = [
        { compound_id: 123 },
        { compound_id: 321 },
        { compound_id: 213 },
      ];
      const mockSeriesItem = {
        data: {
          compound_id: 213,
        },
      };

      it("should return matching compound", () => {
        expect(findCompoundBySeriesItem(mockSeriesItem, mockCompounds)).toBe(
          mockCompounds[2]
        );
      });
    });
  });
});
