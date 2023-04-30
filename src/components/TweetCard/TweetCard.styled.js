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
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
