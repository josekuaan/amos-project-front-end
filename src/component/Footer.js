import React from "react";

export default function Footer() {
  return (
    <footer id="footer" class="footer">
      <div class="container">
        <div class="hm-footer-copyright text-center">
          <div class="footer-social">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-pinterest"></i>
            </a>
            <a href="#">
              <i class="fa fa-behance"></i>
            </a>
          </div>
          <p>
            &copy;copyright. designed and developed by{" "}
            <a href="https://www.therichpost.com/">Jassa</a>
          </p>
        </div>
      </div>

      <div id="scroll-Top">
        <div class="return-to-top">
          <i
            class="fa fa-angle-up "
            id="scroll-top"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Back to Top"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </footer>
  );
}
