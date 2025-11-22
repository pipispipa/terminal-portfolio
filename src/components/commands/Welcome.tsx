import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
                                                                                                                        
DDDDDDDDDDDDD          iiii                                       iiii                                                     
D::::::::::::DDD      i::::i                                     i::::i                                                    
D:::::::::::::::DD     iiii                                       iiii                                                     
DDD:::::DDDDD:::::D                                                                                                        
  D:::::D    D:::::D iiiiiii    ooooooooooo   nnnn  nnnnnnnn    iiiiiii     ssssssssss      ooooooooooo       ssssssssss   
  D:::::D     D:::::Di:::::i  oo:::::::::::oo n:::nn::::::::nn  i:::::i   ss::::::::::s   oo:::::::::::oo   ss::::::::::s  
  D:::::D     D:::::D i::::i o:::::::::::::::on::::::::::::::nn  i::::i ss:::::::::::::s o:::::::::::::::oss:::::::::::::s 
  D:::::D     D:::::D i::::i o:::::ooooo:::::onn:::::::::::::::n i::::i s::::::ssss:::::so:::::ooooo:::::os::::::ssss:::::s
  D:::::D     D:::::D i::::i o::::o     o::::o  n:::::nnnn:::::n i::::i  s:::::s  ssssss o::::o     o::::o s:::::s  ssssss 
  D:::::D     D:::::D i::::i o::::o     o::::o  n::::n    n::::n i::::i    s::::::s      o::::o     o::::o   s::::::s      
  D:::::D     D:::::D i::::i o::::o     o::::o  n::::n    n::::n i::::i       s::::::s   o::::o     o::::o      s::::::s   
  D:::::D    D:::::D  i::::i o::::o     o::::o  n::::n    n::::n i::::i ssssss   s:::::s o::::o     o::::ossssss   s:::::s 
DDD:::::DDDDD:::::D  i::::::io:::::ooooo:::::o  n::::n    n::::ni::::::is:::::ssss::::::so:::::ooooo:::::os:::::ssss::::::s
D:::::::::::::::DD   i::::::io:::::::::::::::o  n::::n    n::::ni::::::is::::::::::::::s o:::::::::::::::os::::::::::::::s 
D::::::::::::DDD     i::::::i oo:::::::::::oo   n::::n    n::::ni::::::i s:::::::::::ss   oo:::::::::::oo  s:::::::::::ss  
DDDDDDDDDDDDD        iiiiiiii   ooooooooooo     nnnnnn    nnnnnniiiiiiii  sssssssssss       ooooooooooo     sssssssssss    
                                                          
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
______ _             _               
|  _  (_)           (_)              
| | | |_  ___  _ __  _ ___  ___  ___ 
| | | | |/ _ \| '_ \| / __|/ _ \/ __|
| |/ /| | (_) | | | | \__ \ (_) \__ \
|___/ |_|\___/|_| |_|_|___/\___/|___/
                                     
                                      
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`

         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
