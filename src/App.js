import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, Div, Text, Icon, Col, Row, Container } from "atomize";
import {
  About,
  Collaborator,
  Contact,
  Header,
  Nav,
  Offer,
  Team,
  Testimonial,
  Footer,
} from "./components/Components";

const theme = {
  colors: {
    green: "##6FCAA8",
    darkGreen: "#36AB80",
    black: "#0A1F44",
    dark: "#0A1F44",
    white: "#FFFFF",
    gray: "#B0B7C3",
    darkGray: "#8A94A6",
    blue: "#026DD6",
    darkBlue: "#01408F",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Header />
        <About />
        <Team />
        <Collaborator />
        <Offer />
        <Div d="flex" flexDir={{ xs: "column", lg: "row" }} p="0rem">
          <Col p="0rem" size={{ xs: 12, lg: 4 }}>
            <Testimonial />
          </Col>
          <Div
            bg="#000000"
            w={{ xs: "100%", lg: "1px" }}
            h={{ xs: "1px", lg: "auto" }}
          ></Div>
          <Col p="0rem" size={{ xs: 12, lg: 8 }}>
            <Contact />
          </Col>
        </Div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
