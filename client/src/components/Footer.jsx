import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

/** Footer color 변경 */
const FooterStyle = styled.footer`
  background: #222831;
  color: #fcfcfc;
  .text-color-detail{
    color: #fcfcfc;
  }
`;
// li 적용된 부분에 대해서 text의 컬러를 변경해야 됨.

const Footer = () => {
  return (
    <>
    {/* 기존 컬러에 FooterStyle을 추가해서 수정했다. styled-componets */}
    <FooterStyle>
      <MDBFooter className='text-center'>
        <MDBContainer className='p-4'>

          <section className=''>
            {/* 폰트 사이즈를 조정해야 한다고 판단됨. */}
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h3 className='text-uppercase'>동심원</h3>
                  <p>당신의 소중한 사람들에게 감사함을 전합니다.</p>
                  <p>소중한 인연이 만족하는 선물을 전합니다.</p>
              </MDBCol>

              <MDBCol lg='3' md='6' className='text-color-detail mb-4 mb-md-0'>
                <div class="col">
                    <ul class="nav flex-column">
                      <li class="nav-item mb-2">
                        <Link to={"/"} class="nav-link p-0 text-muted">
                          모든상품
                        </Link>
                      </li>
                      <li class="nav-item mb-2">
                        <Link to={"/"} class="nav-link p-0 text-muted">
                          할인상품
                        </Link>
                      </li>
                      <li class="nav-item mb-2">
                        <Link to={"/"} class="nav-link p-0 text-muted">
                          판매자 등록 신청
                        </Link>
                      </li>
                      <li class="nav-item mb-2">
                        <Link to={"/"} class="nav-link p-0 text-muted">
                          공지사항
                        </Link>
                      </li>
                      <li class="nav-item mb-2">
                        <Link to={"/"} class="nav-link p-0 text-muted">
                          고객문의
                        </Link>
                      </li>
                    </ul>
                  </div>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h4 className='text-uppercase'>전화 문의</h4>

                <ul className='list-unstyled mb-0'>
                  <li class="nav-item mb-2">82-000-0000</li>
                  <li class="nav-item mb-2">
                    전화문의는 평일 9시부터 6시까지만 가능합니다.
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5>(주)성조</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">위치</li>
                  <li class="nav-item mb-2">000-0000-0000</li>
                  <li class="nav-item mb-2">
                  <Link to={"/"} class="nav-link p-0 text-muted">
                      seongjo@dongsimwon.kr
                    </Link>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          © 2020 Copyright : 2022 성조
        </div>
      </MDBFooter>
    </FooterStyle>

      <FooterStyle>
        <footer>
          <div class="container">
            {/* class="row row-cols-5 py-5 border-top" 이 값으로 인하여 footer가 깨지는 것이 있음. 조정이 필요하다 생각됨. */}
            <div>
              <div class="col"></div>

              {/* <div class="col">
                <h5>전화문의</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">82-000-0000</li>
                  <li class="nav-item mb-2">
                    전화문의는 평일 9시부터 6시까지만 가능합니다.
                  </li>
                </ul>
              </div> */}

              {/* <div class="col">
                <h5>(주)성조</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">위치</li>
                  <li class="nav-item mb-2">000-0000-0000</li>
                  <li class="nav-item mb-2">
                    <Link to={"/"} class="nav-link p-0 text-muted">
                      seongjo@dongsimwon.kr
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </footer>
      </FooterStyle>
    </>
  );
};

export default Footer;
