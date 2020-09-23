document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contoh-html").innerText = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="deskripsi website">

    ...dapat diisi dengan tag lain...

    <title>Judul Website</title>
  </head>

  <body>

    ...dapat diisi dengan tag lain...

  </body>
  </html>
  `;

  document.getElementById("contoh-tag-head").innerText = `
  <!-- untuk mengatur enkoding yang digunakan -->
  <meta charset="UTF-8">

  <!-- untuk menjelaskan deskripsi website -->
  <meta name="description" content="deskripsi website">

  <!-- untuk mengatur judul website, dapat dilihat pada tab browser -->
  <title>Judul Website</title>
  `;

  document.getElementById("contoh-tag-body").innerText = `
  <!-- untuk membuat heading -->
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>

  <!-- untuk membuat paragraf -->
  <p>Paragraf 1</p>

  <!-- untuk membuat list berupa simbol -->
  <ul>
    <li>List simbol</li>
    <li>List simbol</li>
    <li>List simbol</li>
  </ul>

  <!-- untuk membuat list berupa angka -->
  <ol>
    <li>List angka</li>
    <li>List angka</li>
    <li>List angka</li>
  </ol>
  `;

  document.getElementById("contoh-tag-attribute").innerText = `
  <!-- atribut id, biasanya digunakan pada selector Javascript -->
  <h1 id="contoh-id">Heading 1</h1>

  <!-- atribut class, biasanya dipakai pada selector CSS -->
  <h1 class="contoh-class">Heading 1</h1>

  <!-- atribut style, untuk mengatur style element HTML -->
  <h1 style="color: red">Heading 1</h1>
  `;

  document.getElementById("contoh-tag-h").innerText = `
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  `;

  document.getElementById("contoh-tag-p").innerText = `
  <p>Paragraf 1</p>
  <p>Paragraf 2</p>
  <p>Paragraf 3</p>
  `;

  document.getElementById("contoh-tag-ul").innerText = `
  <ul>
    <!-- tag li diletakan di dalam tag ul -->
    <li>list simbol 1</li>
    <li>list simbol 2</li>
    <li>list simbol 3</li>
  </ul>
  `;

  document.getElementById("contoh-tag-ol").innerText = `
  <ol>
    <!-- tag li diletakan di dalam tag ol -->
    <li>list angka 1</li>
    <li>list angka 2</li>
    <li>list angka 3</li>
  </ol>
  `;

  document.getElementById("contoh-tag-table").innerText = `
  <!-- CSS untuk mengubah tampilan tabel, akan dibahas pada materi CSS Dasar -->
  <style>
    table, th, td {
      text-align: left;
      border: 1px solid black;
      border-collapse: collapse;
      padding: 2px 3px 2px 3px;
    }
  </style>

  <table>
    <!-- tag thead sebagai bagian header tabel -->
    <thead>
      <!-- tag tr untuk membuat row -->
      <tr>
        <!-- tag th untuk membuat collumn header -->
        <th>Nama</th>
        <th>NIM</th>
      </tr>
    </thead>

    <!-- tag tbody sebagai bagian body tabel -->
    <tbody>
      <!-- tag tr untuk membuat row -->
      <tr>
        <!-- tag td untuk membuat collumn body -->
        <td>Muhammad Faizal Fazri</td>
        <td>1822490645</td>
      </tr>
    </tbody>
  </table>
  `;

  document.getElementById("contoh-tag-img").innerText = `
  <img src="https://via.placeholder.com/150" height="150" alt="contoh-gambar">
  `;

  document.getElementById("contoh-tag-form").innerText = `
  <!-- CSS untuk mengubah tampilan form, akan dibahas pada materi CSS Dasar -->
  <style>
    form > * {
      display: block;
    }
    
    form > input, textarea {
      margin-bottom: 15px;
    }

    .mb-15 {
      margin-bottom: 15px;
    }
  </style>

  <form action="./index.html" method="get">
    <!-- tag label untuk membuat label -->
    <label for="nama">Nama</label>
    <!-- tag input dengan type text untuk membuat teks input -->
    <input id="nama" name="nama" type="text">

    <!-- tag label untuk membuat label -->
    <label for="nim">NIM</label>
    <!-- tag input dengan type text untuk membuat teks input -->
    <input id="nim" name="nim" type="text">

    <p>Checkbox</p>
    <!-- tag label untuk membuat label -->
    <label>
      <!-- tag input dengan type checkbox untuk membuat checkbox -->
      <input id="checkbox1" name="checkbox" value="1" type="checkbox">
      1
    </label>

    <!-- tag label untuk membuat label -->
    <label class="mb-15">
      <!-- tag input dengan type checkbox untuk membuat checkbox -->
      <input id="checkbox2" name="checkbox" value="2" type="checkbox">
      2
    </label>

    <p>Options</p>
    <!-- tag label untuk membuat label -->
    <label>
      <!-- tag input dengan type radio untuk membuat options -->
      <input id="options1" name="options" value="1" type="radio">
      1
    </label>

    <!-- tag label untuk membuat label -->
    <label class="mb-15">
      <!-- tag input dengan type radio untuk membuat options -->
      <input id="options2" name="options" value="2" type="radio">
      2
    </label>

    <!-- tag label untuk membuat label -->
    <label for="text-area">Text Area</label>
    <!-- tag textarea untuk membuat teks area -->
    <textarea id="text-area" name="text-area" rows="5"></textarea>

    <!-- tag button dengan type submit untuk membuat tombol submit -->
    <button type="submit">Submit</button>
  </form>
  `;
});
