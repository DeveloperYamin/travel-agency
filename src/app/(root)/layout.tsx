/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */

import BottomFooter from "@/components/bottom-footer";
import TopHeader from "@/components/top-header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
      <link rel="icon" type="image/x-icon" href="assets/img/favicon.png" />
      <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/css/animation.css" rel="stylesheet" />
      <link href="assets/css/dropzone.min.css" rel="stylesheet" />
      <link href="assets/css/flatpickr.min.css" rel="stylesheet" />
      <link href="assets/css/flickity.min.css" rel="stylesheet" />
      <link href="assets/css/lightbox.min.css" rel="stylesheet" />
      <link href="assets/css/magnifypopup.css" rel="stylesheet" />
      <link href="assets/css/select2.min.css" rel="stylesheet" />
      <link href="assets/css/rangeSlider.min.css" rel="stylesheet" />
      <link href="assets/css/prism.css" rel="stylesheet" />
      <link href="assets/css/bootstrap-icons.css" rel="stylesheet" />
      <link href="assets/css/fontawesome.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />

      <div id="preloader">
        <div className="preloader">
          <span />
          <span />
        </div>
      </div>

      <TopHeader />
      <main>{children}</main>
      <BottomFooter/>

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/dropzone.min.js"></script>
      <script src="assets/js/flatpickr.js"></script>
      <script src="assets/js/flickity.pkgd.min.js"></script>
      <script src="assets/js/lightbox.min.js"></script>
      <script src="assets/js/rangeslider.js"></script>
      <script src="assets/js/select2.min.js"></script>
      <script src="assets/js/counterup.min.js"></script>
      <script src="assets/js/prism.js"></script>
      <script src="assets/js/custom.js"></script>
    </>
  );
}
