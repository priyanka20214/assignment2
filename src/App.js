import './App.css'
import {useState} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

function App() {
  //   const [input, setInput] = useState('')
  const [searchtext, setSearchtext] = useState('')

  const getdata = e => {
    setSearchtext(e.target.value)
    const filtereddata = initialHistoryList.filter(each =>
      each.title.includes(searchtext),
    )
    // setUsers(filtereddata)
    console.log('filter', filtereddata)

    // let searchtext = ''
    // searchtext = e.target.value

    // const filteredKeys = initialHistoryList.filter(key =>
    //   key.title.toLowerCase().includes(searchtext.toLowerCase()),
    // )

    // console.log('filtetred data', filteredKeys)
    // console.log(searchtext)
  }
  return (
    <div className="bg-container">
      <div className="container">
        <div className="search-container">
          <div className="logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="logo"
            />
          </div>

          <div className="search">
            <div className="search-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                height="20"
                width="20"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="search"
                className="input"
                onChange={getdata}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="list-container">
        {initialHistoryList.map(each => (
          <div className="history-list" key={each.id}>
            <div className="list">
              <div className="box-1">
                <p>{each.timeAccessed}</p>
              </div>
              <div className="box-3">
                <img src={each.logoUrl} alt="img" height="30px" width="30px" />
              </div>
              <div className="box-2">
                <p>{each.title}</p>
              </div>
              <div className="box-2">
                <p>{each.domainUrl}</p>
              </div>
            </div>
            <div className="delete">
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
