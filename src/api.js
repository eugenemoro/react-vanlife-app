import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyC8feWCbimjP1T83i1h4r49gaIFM50PdS0',
  authDomain: 'vanlife-342ca.firebaseapp.com',
  projectId: 'vanlife-342ca',
  storageBucket: 'vanlife-342ca.firebasestorage.app',
  messagingSenderId: '571202357866',
  appId: '1:571202357866:web:8d9142cd35f8c7e8be5813',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'vans');

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return vans;
}

// miragejs
// export async function getVans() {
//   const res = await fetch('/api/vans');
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return vans;
}

// miragejs
// export async function getHostVans() {
//   const res = await fetch('/api/host/vans');
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function getVanById(id) {
  const docRef = doc(db, 'vans', id);
  const snapshot = await getDoc(docRef);
  const van = { ...snapshot.data(), id: snapshot.id };
  return van;
}

// miragejs
// export async function getVanById(id) {
//   const res = await fetch(`/api/vans/${id}`);
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

// miragejs
// export async function getHostVanById(id) {
//   const res = await fetch(`/api/host/vans/${id}`);
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

// miragejs
export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
