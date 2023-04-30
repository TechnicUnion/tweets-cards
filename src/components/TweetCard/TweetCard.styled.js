import styled from 'styled-components';

// export const Container = styled.div`
//   width: 380px;
//   height: 460px;
//   display: flex;
//   flex-direction: colomn;
// `;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Avatar = styled.img`
  width: 80px;
  border-radius: 50%;
  top: 178px;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
`;

export const Image = styled.img`
  width: 308px;
  margin-top: 28px;
  margin-right: auto;
  margin-left: auto;
`;

export const Rectangl = styled.img`
  margin-top: 18px;
`;

export const Elipse = styled.img`
  width: 90px;
  top: 178px;
  left: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
  position: absolute;
`;

export const TextWrap = styled.div`
 margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const Text = styled.h3`
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const ButtonWhite = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
`;
