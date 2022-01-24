import React, { useState, useEffect } from "react";
import axios from 'axios';
import { read_cookie } from "sfcookies";
import { BASE_URL_API, HEADER_API } from "../../../config/urlApi";
import FAQ from './FAQ';
import UserFooterComponent from '../../../views/UserFooterComponent';
import UserDashboardNavbarComponent from '../../../views/UserDashboardNavbarComponent';

function FaqPage () {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(BASE_URL_API + read_cookie('user_cred') + '/faq', HEADER_API)
        .then(function (response) {
          console.log(response.data.data);
          setData(response.data.data)
          data.map(function(x){
            x['open'] = false
          })
          console.log(data)
        })
        .catch(function (error) {
            console.log(error.response);
        });
}, [])
  const [faqs, setfaqs] = useState([
    {
      question: 'Apa itu PointCuan?',
      answer: 'PointCuan adalah aplikasi untuk menukarkan total nilai transaksi dan diubah menjadi poin.',
      open: false
    },
    {
      question: 'Poin bisa ditukarkan dengan apa saja?',
      answer: 'Poin yang dimiliki bisa tukarkan menjadi pulsa, paket internet, dan juga cash.',
      open: false
    },
    {
      question: 'Bagaimana cara menukarkan nilai transaksi menjadi point?',
      answer: 'Kami sudah buatkan tutorialnya. silahkan di lihat.',
      open: false
    },
    {
      question: 'Bagaimana cara kerja PointCuan?',
      answer: 'Jadi Anda akan melakukan upload bukti transaksi yang di miliki untuk di tukarkan menjadi poin, kemudian admin akan memeriksa dan memberikan persetujuan.',
      open: false
    },
    {
      question: 'Apakah PointCuan sudah ada di Playstore?',
      answer: 'Saat ini kami hanya menggunakan platform website',
      open: false
    },
    {
      question: 'Kapan Saja waktu menggunakan PointCuan?',
      answer: 'Kamu dapat membuat dan melakukan penukaran poin selama 24 jam, namun kami akan memeriksa transaksimu menjadi poin pada jam layanan saja.',
      open: false
    },
    {
      question: 'Berapa lama waktu yang dibutuhkan PointCuan untuk memproses transaksi saya?',
      answer: 'Umumnya waktu yang diperlukan untuk memproses transaksi adalah 20 menit. Namun pada keadaan tertentu, waktu proses dapat menjadi lebih lama. Kami menjamin transaksi akan selesai diproses dalam waktu kurang dari satu jam.',
      open: false
    },
    {
      question: 'Dari mana saya dapat kabar kalau status transaksi saya sudah disetujui?',
      answer: 'Saat transaksimu telah selesai diproses, kamu dapat melihat status pada riwayat transaksinya.',
      open: false
    }
  ]);

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