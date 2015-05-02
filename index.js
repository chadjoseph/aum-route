import document from 'aum-document';
import history from 'aum-history';

export default function (search) {
  history.pushState(null, document.title, search);

  window.onpopstate();
}

