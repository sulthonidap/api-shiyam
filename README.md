# api-shiyam

## Deskripsi
API ini adalah RESTful API berbasis Node.js (Express) untuk manajemen data pengguna (admin, staff, pasien), riwayat pemeriksaan pasien, serta relasi antara staff dan pasien. Cocok untuk aplikasi klinik, rumah sakit, atau sistem monitoring kesehatan.

## Fitur Utama
- Manajemen User (admin, staff, pasien)
- Manajemen riwayat pemeriksaan pasien
- Relasi many-to-many antara staff dan pasien
- Staff dapat menambah/menghapus pasien yang menjadi tanggung jawabnya

## Model Data
### User
- `id`: integer, primary key
- `name`: string
- `email`: string, unique
- `password`: string
- `role`: enum ('admin', 'staff', 'pasien')
- `telephone`: string (opsional)
- `address`: string (opsional)

### Pemeriksaan
- `id`: integer, primary key
- `tanggal`: date
- `hasil`: string
- `catatan`: text (opsional)
- `pasien_id`: integer, foreign key ke User

### StaffPasien
- `staff_id`: integer, foreign key ke User
- `pasien_id`: integer, foreign key ke User

## Endpoint Utama
### User
- `GET /api/users?role=` — List user, filter by role
- `POST /api/users` — Tambah user
- `GET /api/users/:id` — Detail user
- `PUT /api/users/:id` — Update user
- `DELETE /api/users/:id` — Hapus user

### Pemeriksaan
- `GET /api/pemeriksaan?pasien_id=` — List pemeriksaan, filter by pasien
- `POST /api/pemeriksaan` — Tambah pemeriksaan

### Staff & Pasien
- `GET /api/staff/:id/pasien` — List pasien milik staff
- `POST /api/staff/:id/pasien` — Tambah pasien ke staff
- `DELETE /api/staff/:id/pasien/:pasien_id` — Hapus pasien dari staff

### Pemeriksaan berdasarkan Staff
- `GET /api/staff/:id/pemeriksaan` — Mengambil seluruh hasil pemeriksaan dari semua pasien milik staff tertentu. Response berisi array pemeriksaan, setiap item include data pasien (id, name, email, role).

## Setup & Konfigurasi
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Buat file .env**
   ```env
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=diabetes_db
   DB_HOST=127.0.0.1
   ```
3. **Migrasi database**
   ```bash
   npx sequelize-cli db:migrate
   ```
4. **Jalankan server**
   ```bash
   node src/app.js
   # atau
   npm start
   ```
5. **Akses API**
   - Base URL: `http://localhost:3000/api`

## Struktur Folder
- `src/models/` — Model Sequelize
- `src/routes/` — Routing API
- `src/migrations/` — File migrasi database
- `src/config/` — Konfigurasi database

## Lisensi
MIT