import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>dionisos.icu</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
