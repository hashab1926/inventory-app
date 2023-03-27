import Button from '@/components/Buttons/Button';
import Card from '@/components/Cards/Card';
import Sidebar from '@/components/Layouts/Sidebar';
import Snackbar from '@/components/Snackbar/Snackbar';
import { useState } from 'react';

export default function Home() {
  const [snackbar, setSnackbar] = useState(false);
  return (
    <main>
      <Sidebar />
      <section id="content-page" className="px-24px pt-12px">
        <Card>
          <Button onClick={() => setSnackbar(!snackbar)} variant="secondary">Open Snackbar</Button>
        </Card>
        <Snackbar
          show={snackbar}
          onClickAction={() => setSnackbar(false)}
          onHide={() => setSnackbar(false)}
        >
          Produk telah ditambahkan
        </Snackbar>
      </section>
    </main>
  )
}
