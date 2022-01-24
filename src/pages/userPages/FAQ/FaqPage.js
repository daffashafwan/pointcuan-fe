import React, { useState, useEffect } from "react";
import axios from 'axios';
import { read_cookie } from "sfcookies";
import { BASE_URL_API, HEADER_API } from "../../../config/urlApi";
import FAQ from './FAQ';
import UserFooterComponent from '../../../views/UserFooterComponent';
import UserDashboardNavbarComponent from '../../../views/UserDashboardNavbarComponent';
import { Navigate } from "react-router";
function FaqPage() {
  const [data, setData] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    if (read_cookie('user_cred').length < 1) {
      navigate('/');
    }
  })
  useEffect(() => {
    axios.get(BASE_URL_API + read_cookie('user_cred') + '/faq', HEADER_API)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
        data.map(function (x) {
          x['open'] = false
        })
        console.log(data)
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [])

  const toggleFAQ = index => {
    setData(data.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="flex flex-col h-screen">
      <div>
        <UserDashboardNavbarComponent />
      </div>
      <div>
        <header>
          <h1>FAQ</h1>
        </header>
        <div className="faqs">
          {data?.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div>
          <UserFooterComponent />
        </div>
      </div>
    </div>
  );
}

export default FaqPage;