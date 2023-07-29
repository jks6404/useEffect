import React,{useState,useEffect} from "react";


const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
    "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}",
]


const LiveSearching=()=>{
  let[search,setSearch]= useState("");
  let [filteredCountries, setFilteredCountries] = useState(countries);

  console.log("filtered countries", filteredCountries);

  useEffect(()=>{
    search=""? setFilteredCountries(countries) :
    (setFilteredCountries(countries.filter((country) => country.toLowerCase().includes(search.toLowerCase()))))
  },[search])

  return(
    <div>
            
    <input type="text" placeholder="Search Country" 
    value={search} onChange={(e) => setSearch(e.target.value)}
    />
    {/* <button onClick={implementSubmit}>Submit</button> */}



<div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
}}>
    {
        filteredCountries.map((country) => (
            <p style={{
                width: "100px",
                border: "1px solid black",
                margin: "5px",
                padding: "5px",
                textAlign: "center",
                backgroundColor: "lightgray",
            }}>{country}</p>
        ))
    }
</div>
</div>

  )
}

export default LiveSearching;