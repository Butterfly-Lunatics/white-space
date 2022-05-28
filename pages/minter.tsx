import type { NextPage } from 'next'
import Web3 from 'web3'
import MinterForm from '../components/MinterForm'
import useAuth from '../hooks/useAuthentication'

const web3 = new Web3(Web3.givenProvider)

const Minter: NextPage = () => {
  const [{ authenticate, isAuthenticated, logout, user }, loading] =
    useAuth(false)
  return (
    <div>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <>
          <h2>Hi {JSON.stringify(isAuthenticated)}</h2>
          {isAuthenticated ? (
            <>
              <MinterForm user={user!} web3={web3} />
              <button
                onClick={() => logout()}
                className="rounded-xl bg-red-600 px-8 py-5 text-lg"
              >
                LogOut
              </button>
            </>
          ) : (
            <button
              className="rounded-xl bg-yellow-300 px-8 py-5 text-lg"
              onClick={() => authenticate()}
            >
              SignUp
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Minter
