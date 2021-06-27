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
      <p>Welcome to iHeart Songs Dashboard</p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Back to Home page
      </button>
      <div className="flex-row">
        <div className="flex-col">
          <p
            onClick={() => {
              clickColHeader("song");
            }}
            className={getClassNamesFor("song")}
          >
            Song
          </p>
          {items.map((item) => {
            return <p>{item.song}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("artist");
            }}
            className={getClassNamesFor("artist")}
          >
            Artists
          </p>
          {items.map((item) => {
            return <p>{item.artist}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("songReleaseDate");
            }}
            className={getClassNamesFor("songReleaseDate")}
          >
            Song Release Date
          </p>
          {items.map((item) => {
            return <p>{item.songReleaseDate}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("playCount");
            }}
            className={getClassNamesFor("playCount")}
          >
            Play Count
          </p>
          {items.map((item) => {
            return <p>{item.playCount}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricA");
            }}
            className={getClassNamesFor("metricA")}
          >
            Metric A
          </p>
          {items.map((item) => {
            return <p>{item.metricA}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricB");
            }}
            className={getClassNamesFor("metricB")}
          >
            Metric B
          </p>
          {items.map((item) => {
            return <p>{item.metricB}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricC");
            }}
            className={getClassNamesFor("metricC")}
          >
            Metric C
          </p>
          {items.map((item) => {
            return <p>{item.metricC}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricD");
            }}
            className={getClassNamesFor("metricD")}
          >
            Metric D
          </p>
          {items.map((item) => {
            return <p>{item.metricD}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricE");
            }}
            className={getClassNamesFor("metricE")}
          >
            Metric E
          </p>
          {items.map((item) => {
            return <p>{item.metricE}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricF");
            }}
            className={getClassNamesFor("metricF")}
          >
            Metric F
          </p>
          {items.map((item) => {
            return <p>{item.metricF}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricG");
            }}
            className={getClassNamesFor("metricG")}
          >
            Metric G
          </p>
          {items.map((item) => {
            return <p>{item.metricG}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricH");
            }}
            className={getClassNamesFor("metricH")}
          >
            Metric H
          </p>
          {items.map((item) => {
            return <p>{item.metricH}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricI");
            }}
            className={getClassNamesFor("metricI")}
          >
            Metric I
          </p>
          {items.map((item) => {
            return <p>{item.metricI}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricJ");
            }}
            className={getClassNamesFor("metricJ")}
          >
            Metric J
          </p>
          {items.map((item) => {
            return <p>{item.metricJ}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricK");
            }}
            className={getClassNamesFor("metricK")}
          >
            Metric K
          </p>
          {items.map((item) => {
            return <p>{item.metricK}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricL");
            }}
            className={getClassNamesFor("metricL")}
          >
            Metric L
          </p>
          {items.map((item) => {
            return <p>{item.metricL}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricM");
            }}
            className={getClassNamesFor("metricM")}
          >
            Metric M
          </p>
          {items.map((item) => {
            return <p>{item.metricM}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricN");
            }}
            className={getClassNamesFor("metricN")}
          >
            Metric N
          </p>
          {items.map((item) => {
            return <p>{item.metricN}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricO");
            }}
            className={getClassNamesFor("metricO")}
          >
            Metric O
          </p>
          {items.map((item) => {
            return <p>{item.metricO}</p>;
          })}
        </div>
        <div className="col">
          <p
            onClick={() => {
              clickColHeader("metricP");
            }}
            className={getClassNamesFor("metricP")}
          >
            Metric P
          </p>
          {items.map((item) => {
            return <p>{item.metricP}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SongsList;
