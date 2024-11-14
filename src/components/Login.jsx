export default function Login() {
  return (
    <form>
      <div className="foromTitle">
        <span className="material-symbols-outlined mainImg">how_to_vote</span>
        <h1 className="">Please sign in</h1>
      </div>

      <div className="inputForom">
        <label>Email </label>
        <input type="email" className="" placeholder="email@mail.com" />
      </div>
      <div className="inputForom">
        <label>Password</label>
        <input type="password" className="" placeholder="Password" />
      </div>

      <button type="submit">Sign in</button>
      <p>© Elections Day 2024</p>
    </form>
  );
}
