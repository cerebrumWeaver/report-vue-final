import { createStore } from "vuex";

export default createStore({
  state: {
    url: [
      {
        value: "CleanBases.pdf",
        label: "CleanBases.pdf"
      },
      {
        value: "CleanBases.png",
        label: "CleanBases.png"
      },
      {
        value: "filter.stat.xls",
        label: "filter.stat.xls"
      },
      {
        value: "filter_rate.pdf",
        label: "filter_rate.pdf"
      },
      {
        value: "filter_rate.png",
        label: "filter_rate.png"
      },
      {
        value: "Q30.pdf",
        label: "Q30.pdf"
      },
      {
        value: "Q30.png",
        label: "Q30.png"
      },
      {
        value: "readme.doc",
        label: "readme.doc"
      }
    ],
    table01: [
      {
        Sample: 'A12',
        TotalCleanRead: 46783786,
        MappingRate: 0.9674,
      },
      {
        Sample: 'A13',
        TotalCleanRead: 47153664,
        MappingRate: 0.9674,
      },
      {
        Sample: 'A14',
        TotalCleanRead: 46841830,
        MappingRate: 0.9685,
      },
      {
        Sample: 'A17',
        TotalCleanRead: 47062958,
        MappingRate: 0.9630,
      },
      {
        Sample: 'A20',
        TotalCleanRead: 47217498,
        MappingRate: 0.9630,
      },
      {
        Sample: 'A21',
        TotalCleanRead: 47217498,
        MappingRate: 0.9724,
      },
      {
        Sample: 'A22',
        TotalCleanRead: 47359564,
        MappingRate: 0.9724,
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
