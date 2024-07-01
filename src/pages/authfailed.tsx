import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation'

const AuthFailedScreen = () => {
    const router = useRouter()
    return (
      <div className="fullScreen colorPrimary centerAll superPaddingVertical flex flex-ai-c flex-jc-c">
        <h1 className="subHeadingSecondary-align-center">Authentication Failed</h1>
          <button
            className="flex flex-ai-c personal-link buttonText colorSecondary"
            onClick={() => {
                router.replace('/');
            }}
          >
            <span>Redirect to home screen</span>
          </button>
      </div>
    );
  };
  
  export default AuthFailedScreen;