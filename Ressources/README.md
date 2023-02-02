# Checkpoint4

## Installation

1. Clone the current repository.

2. Create a branch.

3. Source le fichier kickmouse.sql qui est à la racine du dossier /backend.

4. Move into the `backend` directory and copy the `.env.sample` file to create your `.env` file.
   Fill your backend `.env` with your database credentials. The `DB_NAME` is **kickmouse**.
   You may have to change `APP_PORT` if the port 5000 is not available.

5. Move into the `frontend` directory and copy the `.env.sample` file to create your `.env` file.
   **This one is not committed to the shared repository.**
   Fill your frontend `.env` with the url of your backend. In particular, adapt the port if your port 5000 is not available.

5. Execute the following commands from the root folder of the project to start:

```bash
# Install dependencies
npm run setup
npm install

# Create 'kickmouse' DB
npm run migrate
```

## Usage

Launch the project with the command below and follow the instructions on the homepage `http://localhost:3000/`;

```bash
npm run dev
```

Sur ce projet, nous pouvons :
    - s'inscrire
    - se connecter
    - supprimer son compte
    - jouer
    - enregistrer des scores
    - voir nos scores et le classement général

En fouinant, on peut aussi switcher l'icone de la cible (spécial dédicace à Lucas). 
Indice, c'est un easter egg sur la page http://localhost:3000/live pendant le jeu.


### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal