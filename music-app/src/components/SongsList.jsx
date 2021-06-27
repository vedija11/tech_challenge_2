import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import "./SongsList.css";

const useSortableData = (data, config = null) => {
  const [sortPattern, setSortPattern] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...data];
    if (sortPattern !== null && sortPattern !== undefined) {
      sortableItems.sort((a, b) => {
        if (a[sortPattern.key] < b[sortPattern.key]) {
          return sortPattern.direction === "ascending" ? -1 : 1;
        }
        if (a[sortPattern.key] > b[sortPattern.key]) {
          return sortPattern.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortPattern]);

  const clickColHeader = (key) => {
    let direction = "ascending";
    if (
      sortPattern &&
      sortPattern.key === key &&
      sortPattern.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortPattern({ key, direction });
  };

  return { items: sortedItems, clickColHeader, sortPattern };
};

const SongsList = () => {
  let history = useHistory();
  const songURL = "./songData.json";

  const [Data, setData] = useState([]);
  const { items, clickColHeader, sortPattern } = useSortableData(Data);

  const getClassNamesFor = (name) => {
    if (!sortPattern) {
      return;
    }
    return sortPattern.key === name ? sortPattern.direction : undefined;
  };

  const handleClick = () => {
    history.push("/");
  };

  useEffect(() => {
    if (!songURL) return;
    const fetchData = async () => {
      const response = await fetch(songURL, {
        method: "get",
      });
      const res = await response.json();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <div className="song-header">
      <h2>Welcome to iHeart Songs Dashboard</h2>
      <button
        onClick={() => {
          handleClick();
        }}
        className="fetch-button"
      >
        Back to Home page
      </button>
      <div className="box">
      <div className="flex-row">
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("song");
            }}
            className={getClassNamesFor("song")}
          >
            Song Name
          </button>
          {items.map((item) => {
            return <p>{item.song}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("artist");
            }}
            className={getClassNamesFor("artist")}
          >
            Artists
          </button>
          {items.map((item) => {
            return <p>{item.artist}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("songReleaseDate");
            }}
            className={getClassNamesFor("songReleaseDate")}
          >
            Release Date
          </button>
          {items.map((item) => {
            return <p>{item.songReleaseDate}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("playCount");
            }}
            className={getClassNamesFor("playCount")}
          >
            Play Count
          </button>
          {items.map((item) => {
            return <p>{item.playCount}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricA");
            }}
            className={getClassNamesFor("metricA")}
          >
            Metric A
          </button>
          {items.map((item) => {
            return <p>{item.metricA}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricB");
            }}
            className={getClassNamesFor("metricB")}
          >
            Metric B
          </button>
          {items.map((item) => {
            return <p>{item.metricB}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricC");
            }}
            className={getClassNamesFor("metricC")}
          >
            Metric C
          </button>
          {items.map((item) => {
            return <p>{item.metricC}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricD");
            }}
            className={getClassNamesFor("metricD")}
          >
            Metric D
          </button>
          {items.map((item) => {
            return <p>{item.metricD}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricE");
            }}
            className={getClassNamesFor("metricE")}
          >
            Metric E
          </button>
          {items.map((item) => {
            return <p>{item.metricE}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricF");
            }}
            className={getClassNamesFor("metricF")}
          >
            Metric F
          </button>
          {items.map((item) => {
            return <p>{item.metricF}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricG");
            }}
            className={getClassNamesFor("metricG")}
          >
            Metric G
          </button>
          {items.map((item) => {
            return <p>{item.metricG}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricH");
            }}
            className={getClassNamesFor("metricH")}
          >
            Metric H
          </button>
          {items.map((item) => {
            return <p>{item.metricH}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricI");
            }}
            className={getClassNamesFor("metricI")}
          >
            Metric I
          </button>
          {items.map((item) => {
            return <p>{item.metricI}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricJ");
            }}
            className={getClassNamesFor("metricJ")}
          >
            Metric J
          </button>
          {items.map((item) => {
            return <p>{item.metricJ}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricK");
            }}
            className={getClassNamesFor("metricK")}
          >
            Metric K
          </button>
          {items.map((item) => {
            return <p>{item.metricK}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricL");
            }}
            className={getClassNamesFor("metricL")}
          >
            Metric L
          </button>
          {items.map((item) => {
            return <p>{item.metricL}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricM");
            }}
            className={getClassNamesFor("metricM")}
          >
            Metric M
          </button>
          {items.map((item) => {
            return <p>{item.metricM}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricN");
            }}
            className={getClassNamesFor("metricN")}
          >
            Metric N
          </button>
          {items.map((item) => {
            return <p>{item.metricN}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricO");
            }}
            className={getClassNamesFor("metricO")}
          >
            Metric O
          </button>
          {items.map((item) => {
            return <p>{item.metricO}</p>;
          })}
        </div>
        <div className="flex-col">
          <button
            onClick={() => {
              clickColHeader("metricP");
            }}
            className={getClassNamesFor("metricP")}
          >
            Metric P
          </button>
          {items.map((item) => {
            return <p>{item.metricP}</p>;
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default SongsList;
