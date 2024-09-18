import { CiSearch } from "react-icons/ci";

const Main = () => {
  return (
    <div className="my-12">
        <div className="flex justify-center gap-2 items-center">
            <div className="flex relative">
                <input type="text" placeholder="enter pokemon name" className="w-96 h-10 p-2 rounded-lg placeholder:font-light placeholder:text-neutral-900 bg-neutral-400" />
                <CiSearch className="h-10 text-neutral-900 w-6 absolute right-2 cursor-pointer"/>
            </div>
            
            <select name="poke-type" id="poke-type" className="w-96 h-10 p-2 rounded-lg bg-neutral-400">
                <option value="all">All</option>
                <option value="normal">Normal</option>
                <option value="flying">Flying</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="all">All</option>
                <option value="normal">Normal</option>
                <option value="flying">Flying</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="all">All</option>
                <option value="normal">Normal</option>
                <option value="flying">Flying</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="all">All</option>
                <option value="normal">Normal</option>
                <option value="flying">Flying</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="all">All</option>
                <option value="normal">Normal</option>
                <option value="flying">Flying</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
            </select>

            <button className="bg-neutral-900 text-neutral-200 h-10 px-3 w-20 rounded-lg hover:bg-neutral-800">Search</button>
        </div>
        <div> 

        </div>
    </div>
  )
}

export default Main