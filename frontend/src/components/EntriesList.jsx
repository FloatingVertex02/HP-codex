import Entry from "./Entry";

function EntriesList({ entries }) {
    return (
        <div>
            {entries.map((entry) => (
                <Entry key={entry.id} entry={entry} />
            ))}
        </div>
    )
}

export default EntriesList