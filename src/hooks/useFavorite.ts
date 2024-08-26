import useSyncState from "./useSyncState";

export default function isFavorite(
  id: string
): [boolean, (id: string) => void] {
  const [favorites, setFavorites] = useSyncState<string[]>(
    "favorite-characters",
    []
  );

  const isFavorite = !!id && !!favorites?.includes(id);

  const toggleFavorite = (characterId: string) => {
    setFavorites(
      isFavorite
        ? favorites?.filter((item) => item !== characterId) || []
        : [...(favorites || []), characterId]
    );
  };

  return [isFavorite, toggleFavorite];
}
