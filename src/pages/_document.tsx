import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,700"
          />
          <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />
          <link rel="stylesheet" href="css/aos.css" />
          <link rel="stylesheet" href="css/ionicons.min.css" />
          <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
          <link rel="stylesheet" href="css/jquery.timepicker.css" />
          <link rel="stylesheet" href="css/flaticon.css" />
          <link rel="stylesheet" href="css/icomoon.css" />
          <link rel="stylesheet" href="css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-migrate-3.0.1.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.easing.1.3.js"></script>
          <script src="js/jquery.waypoints.min.js"></script>
          <script src="js/jquery.stellar.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="js/aos.js"></script>
          <script src="js/jquery.animateNumber.min.js"></script>
          <script src="js/scrollax.min.js"></script>
          <script src="js/bootstrap-datepicker.js"></script>
          <script src="js/jquery.timepicker.min.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    )
  }
}
