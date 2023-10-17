import { SearchResult } from "../models/SearchResult";

export default {
  testResult1: new SearchResult(
    "Study on potatoes",
    "http://article.com",
    "123",
    "Dr. Potato",
    undefined,
    "Metaanalysis",
    undefined,
    {
      publication_title: "Combustion and flame",
      volume: "193",
      isxn: "0010-2180",
      abstract: "This article is cool",
      fulltext_available: "Full-text available",
      start_page: "520",
      end_page: "537",
      publication_date: "July 2018",
      publication_year: "2018",
    },
  ),
  testResult2: new SearchResult(
    "Rocket Science at the Nanoscale",
    "http://princeton.summon.serialssolutions.com/2.0.0/link/0/eLvHCXMwjV3dS8MwED_8eFAfxC90fowKIr5kW9O1TWEMZGyIqA9TQZ9Kkl7YYHTDdq_-7V7WbupkIHkNR_PL5e53ufILQG0pHsjRqNg1JidDRpzHvr7jMpfOSqPJ7NX-Y3T_4Pff_Pfut2z0ci-fu3Wps1Sm41qgLDEW67BptVesYP7TZ20efq0HBkUrmUpl4hMLPZ8_BmxC0tnvhLSCZc6yTW8Pdkua6NwW-7oPa5gewM4P8cBDuG4N2n2KZpg75QF1ZO4Qn3MoYo4zwh5b9UH7CF573ZfOHStfPWDSC_ycecKXgSZgoyRRygi0RY00CmmtrkZtEpP4rm4YGlTPIaUXgSY0qInpqabnnYCTaONFWgUYWXl4gSLkzTCIuEh0QxpUFbiilcelu2bxrBPN3bgEKC4BqsDNHJp4UohfrJ56OYcuJge1XQeZ4nhKtoUNFERMwgocF5gujHGqP6mg4af_-54z2Ca-Etg_tbg4h438Y4oXsGVvQDUSVa4SM-48V2f-8AU4P7bP",
    "10.1021/acsnano.6b02518",
    "Li, Jinxing",
    ".... In particular, micro- and <h>nanoscale rockets</h> (MNRs) offer impressive capabilities, including remarkable speeds, large cargo-towing forces, precise motion controls, and dynamic self-assembly, which have paved the way for designing multifunctional...",
    "Journal Article",
    "American Chemical Society",
    {
      publication_date: "2016-06-28",
      publication_year: "2016",
      start_page: "5619",
      end_page: "5634",
      fulltext_available: "Full-text available",
      abstract:
        "Autonomous propulsion at the nanoscale represents one of the most challenging and demanding goals in nanotechnology. Over the past decade, numerous important advances in nanotechnology and material science have contributed to the creation of powerful self-propelled micro/nanomotors. In particular, micro- and nanoscale rockets (MNRs) offer impressive capabilities, including remarkable speeds, large cargo-towing forces, precise motion controls, and dynamic self-assembly, which have paved the way for designing multifunctional and intelligent nanoscale machines. These multipurpose nanoscale shuttles can propel and function in complex real-life media, actively transporting and releasing therapeutic payloads and remediation agents for diverse biomedical and environmental applications. This review discusses the challenges of designing efficient MNRs and presents an overview of their propulsion behavior, fabrication methods, potential rocket fuels, navigation strategies, practical applications, and the future prospects of rocket science and technology at the nanoscale.",
      publication_title: "ACS nano",
      volume: "10",
      issue: "6",
      isxn: "1936-0851",
    },
  ),
};
