import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    const [user, setUser] = useState(null)

    const getCurrentSession = async () => {
      try {
        const session = await Auth.currentSession();
        const sessionData = session.getIdToken();
        if (sessionData) {
          const { payload } = sessionData;
          //"custom:role": role if custom attribute is added
          const { email, sub, email_verified, "custom:role": role } = payload;
          const user = (IUser) = {
            userId: sub,
            email: email,
            email_verified: email_verified,
            role: role,
          };
          setUser(user);
        }
      } catch (e) {
        console.log(e)
      }
    };
    const initialLoad = useCallback(async () => {
      Hub.listen("auth", async ({ payload: { event, data } }) => {
        switch (event) {
          case "signIn": {
            const role = data?.attributes["custom:role"];
            //if role doesn't match as defined logout
            if (role === "admin") {
              antdMsg.error({
                content: "Not authenticated",
              });
              await Auth.signOut();
              break;
            }
            const user = (IUser) = {
              userId: data?.username,
              email: data?.attributes?.email,
              email_verified: data?.attributes?.email_verified,
              role: role,
            };
            setUser(user);
            //set user data to redux/context
            break;
          }
          case "signUp":
            break;
          case "signOut":
            setUser(null);
            //clear user data in redux/context 
            break;
          case "signIn_failure":
            break;
          default:
        }
      });
    }, []);
    useEffect(() => {
      initialLoad();
      getCurrentSession();
    }, []);

    return <Component {...pageProps} />
  }